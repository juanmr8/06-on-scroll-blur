'use client';
import { useEffect, useRef } from 'react';
import { LenisProvider } from './lenis-provider';
import { useScroll, useTransform, useMotionValue, motion } from 'motion/react';

export default function Page() {
	return (
		<LenisProvider>
			<div className='min-h-svh bg-[#222222]'>
				<BackgroundGrain />
				<ProgressiveBlur />
				<TopSection />
				<BottomSection />
			</div>
		</LenisProvider>
	);
}

function ProgressiveBlur() {
	const { scrollY } = useScroll();
	const rafRef = useRef<number | null>(null);

	const opacities = [
		useMotionValue(0.05),
		useMotionValue(0.05),
		useMotionValue(0.05),
		useMotionValue(0.05),
		useMotionValue(0.05),
	];

	const smoothOpacity = () => {
		const threshold = 0.1;
		let allSettled = true;

		opacities.forEach(opacity => {
			const current = opacity.get();
			const target = 0.05;
			if (Math.abs(current - target) < threshold) {
				opacity.set(target);
			} else if (current > target) {
				opacity.set(current - (current - target) * 0.2);
				allSettled = false;
			}
		});
		if (!allSettled) {
			rafRef.current = requestAnimationFrame(smoothOpacity);
		} else {
			rafRef.current = null;
		}
	};

	useEffect(() => {
		const unsubscribe = scrollY.on('change', latest => {
			const prev = scrollY.getPrevious() || 0;
			const delta = Math.abs(latest - prev);

			opacities.forEach((opacity, index) => {
				const current = opacity.get();
				const multiplier = 0.01 * (index + 1);
				const easedMultiplier = multiplier * (1 - current);
				const newValue = Math.min(current + delta * easedMultiplier, 0.95);
				opacity.set(newValue);
			});

			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
				rafRef.current = null;
			}

			setTimeout(() => {
				if (!rafRef.current) smoothOpacity();
			}, 150);
		});

		return () => {
			unsubscribe();
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [scrollY]);

	return (
		<div className='progressive-blur pointer-events-none fixed inset-0 z-10'>
			<div className='absolute bottom-0 left-0 w-full h-70'>
				{opacities.reverse().map((opacity, index) => (
					<motion.div
						key={index}
						className={`blur-layer absolute bottom-0 left-0 w-full h-full blur-layer-${index + 1}`}
						style={{ opacity }}
					/>
				))}
			</div>
		</div>
	);
}

function BackgroundGrain() {
	return <div className='background-grain' />;
}

function TopSection() {
	return (
		<div className='top-section p-[40px]'>
			<h1 className='text-display-fluid font-display max-w-[8ch] leading-[0.9] tracking-[-6.4px] text-[#E8E8E8] uppercase'>
				The Future is Foggy
			</h1>
			<Crosses />
			<div className='grid gap-8 pt-8 md:grid-cols-12'>
				<div className='col-span-6'>
					<img
						src='/imgs/img-1.jpg'
						className='aspect-714/856 w-full object-cover'
					/>
					<p className='text-small-clamp pt-4 font-mono tracking-[-0.95px] text-[#E8E8E8]'>
						Los Angeles, CA | 2018
					</p>
				</div>
				<div className='col-span-6 col-start-7 flex flex-col items-end'>
					<img
						src='/imgs/img-2.jpg'
						className='aspect-714/416 w-full object-cover'
					/>
					<p className='text-small-clamp pt-4 font-mono tracking-[-0.95px] text-[#E8E8E8]'>
						Ottawa Downtown | 2022
					</p>
				</div>
				<div className='relative col-span-9 col-start-4'>
					<img src='/imgs/img-3.jpg' className='w-full object-cover' />
					<p className='text-small-clamp absolute top-[-36px] right-0 font-mono tracking-[-0.95px] text-[#E8E8E8]'>
						Ottawa Downtown | 2022
					</p>
				</div>
			</div>
			<Crosses />
		</div>
	);
}

function Crosses() {
	return (
		<div className='flex justify-between pt-[100px]'>
			{Array.from({ length: 3 }).map((_, index) => (
				<img
					key={index}
					src='/imgs/cross.svg'
					className='size-[16px] text-[#E8E8E8]'
				/>
			))}
		</div>
	);
}

function BottomSection() {
	return (
		<div className='bottom-section bg-[#E6E6E6] p-[40px]'>
			<h2 className='text-display-fluid font-display max-w-[8ch] leading-[0.9] tracking-[-6.4px] text-[#323334] uppercase'>
				<span>GET IN</span>
				<span className='flex gap-8'>
					<img src='/imgs/fat-line.svg' className='w-[348px]' />{' '}
					<span>TOUCH</span>
				</span>
			</h2>
			<div className='grid grid-cols-12 gap-4 pt-[152px]'>
				<img src='/imgs/img-4.jpg' className='aspect- col-span-4 col-start-2' />
				<div className='col-span-6 col-start-7'>
					<h2 className='text-heading-clamp font-heading leading-[0.9] font-[900] tracking-[0px] text-[#323334]'>
						We'd love to become your trusted photo studio—the team you turn to
						for life's important moments.
					</h2>
					<p className='text-body-clamp pt-4 font-mono leading-[1.05] tracking-[-0.95px] text-[#323334]'>
						Our door is always open for a conversation. No project is too small
						or too ambitious, and we believe the best shoots start with
						understanding exactly what you're looking for. We'll work with you
						to create a custom package that makes sense for your needs and
						budget, with no surprises along the way.
					</p>
				</div>
			</div>
		</div>
	);
}
