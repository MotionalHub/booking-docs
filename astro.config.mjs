// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Discord Booking Bot',
			description: 'Hệ thống bot booking Discord - Tài liệu hướng dẫn sử dụng',
			logo: {
				src: './src/assets/bot.webp',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/components.css',
			],
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/eaYmJD98mY' },
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/enhanced-interactions.js',
						defer: true
					}
				},
				{
					tag: 'script',
					attrs: {
						src: '/table-enhancements.js',
						defer: true
					}
				},
				{
					tag: 'script',
					attrs: {
						src: '/smart-table-overflow.js',
						defer: true
					}
				}
			],
			components: {
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: 'Bắt đầu sử dụng',
					items: [
						{ label: 'Giới thiệu', slug: 'introduction' },
						{ label: 'Cài đặt nhanh', slug: 'quick-start' },
						{ label: 'Cấu hình cơ bản', slug: 'basic-setup' },
					],
				},
				{
					label: 'Cấu hình bot',
					items: [
						{ label: 'Owner Commands', slug: 'commands/owner' },
						{ label: 'Administrator', slug: 'commands/administrator' },
						{ label: 'Cash Management', slug: 'commands/cash' },
						{ label: 'Thanh toán', slug: 'payment' },
					],
				},
				{
					label: 'Lệnh cho Khách',
					items: [
						{ label: 'Khách hàng', slug: 'user/customer' },
						{ label: 'Lệnh tiện ích', slug: 'user/utilities' },
					],
				},
				{
					label: 'Lệnh cho Player',
					items: [
						{ label: 'Player Commands', slug: 'user/player' },
						{ label: 'Lương / Giờ / Star', slug: 'salary-time-star' },
					],
				},
				{
					label: 'Lệnh cho Supporter',
					items: [
						{ label: 'Supporter', slug: 'commands/supporter' },
						{ label: 'Booking / Bill / Donate', slug: 'booking-bill' },
						{ label: 'Ticket System', slug: 'features/ticket' },
						{ label: 'Embed Builder', slug: 'features/embed' },
						{ label: 'Autoresponder', slug: 'features/autoresponder' },
					],
				},
				{
					label: 'Lệnh cho Admin',
					items: [
						{ label: 'Administrator', slug: 'commands/administrator' },
						{ label: 'Cash Management', slug: 'commands/cash' },
						{ label: 'Moderation', slug: 'commands/moderation' },
						{ label: 'Anti-Raid', slug: 'features/anti-raid' },
					],
				},
				{
					label: 'Shop / Economy',
					items: [
						{ label: 'Quản lý Shop', slug: 'shop/shop' },
						{ label: 'Marriage System', slug: 'shop/marriage' },
						{ label: 'Lucky Box', slug: 'shop/lucky-box' },
					],
				},
				{
					label: 'Cấu hình phụ',
					items: [
						{ label: 'Welcome System', slug: 'features/welcome' },
						{ label: 'Part-time System', slug: 'features/part-time' },
						{ label: 'FAQ', slug: 'faq' },
						{ label: 'Troubleshooting', slug: 'troubleshooting' },
						{ label: 'Changelog', slug: 'changelog' },
					],
				},
				{
					label: 'Điều khoản dịch vụ',
					items: [
						{ label: 'Điều khoản và sử dụng', slug: 'tos' },
						{ label: 'Trách nhiệm bên mua', slug: 'tos/buyer-responsibility' },
						{ label: 'Cung cấp dịch vụ', slug: 'tos/provider-rights' },
						{ label: 'Chính sách bên bán', slug: 'tos/seller-policy' },
						{ label: 'Chính sách gia hạn', slug: 'tos/renewal-policy' },
						{ label: 'Hỗ trợ và Setup', slug: 'tos/support-policy' },
						{ label: 'Vận hành kỹ thuật', slug: 'tos/technical-operations' },
						{ label: 'Quy định sử dụng', slug: 'tos/usage-policy' },
						{ label: 'Xử lí vi phạm', slug: 'tos/violation-handling' },
					],
				}
			],
		}),
	],
});
