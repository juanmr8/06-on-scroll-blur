export default function Page() {
	return (
		<div className='min-h-screen p-8 md:p-16'>
			{/* Hero Section - Clamp Mode (Stable Scaling) */}
			<section className='mb-[var(--spacing-xl-clamp)]'>
				<h1 className='font-display mb-[var(--spacing-md-clamp)] text-[length:var(--font-size-display-clamp)] leading-[0.9]'>
					Scroll Blur
				</h1>
				<p className='text-foreground/80 max-w-2xl text-[length:var(--font-size-body-clamp)]'>
					This heading uses <strong>clamp-based scaling</strong> - smooth and
					predictable with hard limits (64px to 128px). Resize your browser to
					see how it scales responsibly.
				</p>
			</section>

			{/* Fluid Mode Section - Dramatic Scaling */}
			<section className='border-foreground/10 mb-[var(--spacing-xl-fluid)] border-t pt-[var(--spacing-lg-clamp)]'>
				<h2 className='font-display mb-[var(--spacing-md-fluid)] text-[length:var(--font-size-display-fluid)] leading-[0.9]'>
					Dramatic Scale
				</h2>
				<p className='text-foreground/80 max-w-2xl text-[length:var(--font-size-body-fluid)]'>
					This heading uses <strong>fluid viewport scaling</strong> - granular
					precision without limits. It scales more dramatically based on
					viewport width for bold responsive effects.
				</p>
			</section>

			{/* Comparison Grid */}
			<section className='mb-[var(--spacing-xl-clamp)]'>
				<h3 className='font-display mb-[var(--spacing-lg-clamp)] text-[length:var(--font-size-heading-clamp)]'>
					Typography Scale Comparison
				</h3>

				<div className='grid gap-[var(--spacing-lg-clamp)] md:grid-cols-2'>
					{/* Clamp Examples */}
					<div className='border-foreground/10 rounded-lg border p-[var(--spacing-md-clamp)]'>
						<h4 className='font-display mb-[var(--spacing-sm-clamp)] text-[length:var(--font-size-heading-clamp)]'>
							Clamp Mode
						</h4>
						<div className='space-y-[var(--spacing-sm-clamp)]'>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-clamp)]'>
									Display Size:
								</p>
								<p className='font-display text-[length:var(--font-size-display-clamp)] leading-none'>
									Aa
								</p>
							</div>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-clamp)]'>
									Heading Size:
								</p>
								<p className='font-display text-[length:var(--font-size-heading-clamp)] leading-none'>
									Aa
								</p>
							</div>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-clamp)]'>
									Body Size:
								</p>
								<p className='text-[length:var(--font-size-body-clamp)]'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-clamp)]'>
									Small Size:
								</p>
								<p className='text-[length:var(--font-size-small-clamp)]'>
									Caption text and metadata information.
								</p>
							</div>
						</div>
					</div>

					{/* Fluid Examples */}
					<div className='border-foreground/10 rounded-lg border p-[var(--spacing-md-fluid)]'>
						<h4 className='font-display mb-[var(--spacing-sm-fluid)] text-[length:var(--font-size-heading-fluid)]'>
							Fluid Mode
						</h4>
						<div className='space-y-[var(--spacing-sm-fluid)]'>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-fluid)]'>
									Display Size:
								</p>
								<p className='font-display text-[length:var(--font-size-display-fluid)] leading-none'>
									Aa
								</p>
							</div>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-fluid)]'>
									Heading Size:
								</p>
								<p className='font-display text-[length:var(--font-size-heading-fluid)] leading-none'>
									Aa
								</p>
							</div>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-fluid)]'>
									Body Size:
								</p>
								<p className='text-[length:var(--font-size-body-fluid)]'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<p className='text-foreground/60 mb-2 text-[length:var(--font-size-small-fluid)]'>
									Small Size:
								</p>
								<p className='text-[length:var(--font-size-small-fluid)]'>
									Caption text and metadata information.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Spacing Examples */}
			<section className='border-foreground/10 border-t pt-[var(--spacing-lg-clamp)]'>
				<h3 className='font-display mb-[var(--spacing-lg-clamp)] text-[length:var(--font-size-heading-clamp)]'>
					Spacing System
				</h3>

				<div className='space-y-[var(--spacing-md-clamp)]'>
					<div>
						<h4 className='font-display mb-[var(--spacing-sm-clamp)] text-[length:var(--font-size-body-clamp)]'>
							Clamp Spacing (Predictable)
						</h4>
						<div className='flex flex-wrap items-end gap-[var(--spacing-xs-clamp)]'>
							<div className='bg-foreground/10 flex h-[var(--spacing-xs-clamp)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-clamp)]'>
									XS
								</span>
							</div>
							<div className='bg-foreground/10 flex h-[var(--spacing-sm-clamp)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-clamp)]'>
									SM
								</span>
							</div>
							<div className='bg-foreground/10 flex h-[var(--spacing-md-clamp)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-clamp)]'>
									MD
								</span>
							</div>
							<div className='bg-foreground/10 flex h-[var(--spacing-lg-clamp)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-clamp)]'>
									LG
								</span>
							</div>
						</div>
					</div>

					<div>
						<h4 className='font-display mb-[var(--spacing-sm-fluid)] text-[length:var(--font-size-body-fluid)]'>
							Fluid Spacing (Dramatic)
						</h4>
						<div className='flex flex-wrap items-end gap-[var(--spacing-xs-fluid)]'>
							<div className='bg-foreground/20 flex h-[var(--spacing-xs-fluid)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-fluid)]'>
									XS
								</span>
							</div>
							<div className='bg-foreground/20 flex h-[var(--spacing-sm-fluid)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-fluid)]'>
									SM
								</span>
							</div>
							<div className='bg-foreground/20 flex h-[var(--spacing-md-fluid)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-fluid)]'>
									MD
								</span>
							</div>
							<div className='bg-foreground/20 flex h-[var(--spacing-lg-fluid)] w-24 items-end justify-center pb-1'>
								<span className='text-[length:var(--font-size-small-fluid)]'>
									LG
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Usage Guide */}
			<section className='border-foreground/10 mt-[var(--spacing-xl-clamp)] border-t pt-[var(--spacing-lg-clamp)]'>
				<h3 className='font-display mb-[var(--spacing-md-clamp)] text-[length:var(--font-size-heading-clamp)]'>
					How to Use
				</h3>
				<div className='max-w-3xl space-y-[var(--spacing-sm-clamp)] text-[length:var(--font-size-body-clamp)]'>
					<p>
						<strong>Clamp Mode:</strong> Use{' '}
						<code className='bg-foreground/10 rounded px-2 py-1'>
							text-[length:var(--font-size-display-clamp)]
						</code>{' '}
						for predictable, bounded scaling. Great for maintaining readability
						and design consistency.
					</p>
					<p>
						<strong>Fluid Mode:</strong> Use{' '}
						<code className='bg-foreground/10 rounded px-2 py-1'>
							text-[length:var(--font-size-display-fluid)]
						</code>{' '}
						for dramatic, viewport-dependent effects. Perfect for hero sections
						and bold design statements.
					</p>
					<p className='text-foreground/60 text-[length:var(--font-size-small-clamp)]'>
						💡 Tip: Mix and match both modes in the same design. Use clamp for
						body text and UI elements, fluid for headlines and feature sections.
					</p>
				</div>
			</section>
		</div>
	);
}
