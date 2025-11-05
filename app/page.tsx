import { LenisProvider } from './lenis-provider';

export default function Page() {
	return (
		<LenisProvider>
			<div className='min-h-svh bg-[#222222]'>
				<TopSection />
				<BottomSection />
			</div>
		</LenisProvider>
	);
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
				<div className="col-start-7 col-span-6">
					<h2 className='text-heading-clamp font-heading leading-[0.9] tracking-[0px] text-[#323334] font-[900]'>
						We'd love to become your trusted photo studio—the team you turn to
						for life's important moments.
					</h2>
					<p className='text-body-clamp font-mono leading-[1.05] tracking-[-0.95px] text-[#323334] pt-4'>
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
