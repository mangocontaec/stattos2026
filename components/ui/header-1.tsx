'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Home',
			href: '#home',
		},
		{
			label: 'Artists',
			href: '#artists',
		},
		{
			label: 'Conventions',
			href: '#conventions',
		},
		{
			label: 'Piercings',
			href: '#piercings',
		},
		{
			label: 'Booking',
			href: '#booking',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full transition-all duration-300 bg-black/70 backdrop-blur-lg border-b border-red-950/20 shadow-lg',
				scrolled && 'bg-black/90 py-1 border-red-900/40 shadow-2xl'
			)}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div className="hover:bg-accent rounded-md p-2">
					<WordmarkIcon className="h-10 w-auto" />
				</div>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a key={link.label} className={cn(buttonVariants({ variant: 'ghost' }), 'hover:text-[#E50914] transition-colors')} href={link.href}>
							{link.label}
						</a>
					))}
					<a
						href="#booking"
						className={cn(
							buttonVariants(),
							'rounded-full bg-[#E50914] text-white hover:bg-[#FF1F2D] hover:scale-[1.04] shadow-md transition-all duration-300 font-bold px-6'
						)}
					>
						BOOK NOW
					</a>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden border-red-950/20 hover:bg-red-950/10"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5 text-[#E50914]" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<a
							key={link.label}
							className={cn(
								buttonVariants({
									variant: 'ghost',
									className: 'justify-start hover:text-[#E50914]',
								})
							)}
							href={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<a
						href="#booking"
						onClick={() => setOpen(false)}
						className={cn(
							buttonVariants(),
							'w-full rounded-full bg-[#E50914] text-white hover:bg-[#FF1F2D] hover:scale-[1.04] transition-all duration-300 font-bold text-center'
						)}
					>
						BOOK NOW
					</a>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

export const WordmarkIcon = (props: React.ComponentProps<"img">) => (
  <img src="/LOGO-STATTOOS.png" alt="STATTOOS SOCIETY" {...props} />
);
