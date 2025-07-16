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
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/your-server' },
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
				}
			],
			sidebar: [
				{
					label: 'Bắt đầu',
					items: [
						{ label: 'Giới thiệu', slug: 'introduction' },
						{ label: 'Cài đặt nhanh', slug: 'quick-start' },
						{ label: 'Cấu hình cơ bản', slug: 'basic-setup' },
					],
				},
				{
					label: 'Quản lý hệ thống',
					items: [
						{ label: 'Owner Commands', slug: 'commands/owner' },
						{ label: 'Administrator', slug: 'commands/administrator' },
						{ label: 'Cash Management', slug: 'commands/cash' },
						{ label: 'Supporter', slug: 'commands/supporter' },
						{ label: 'Moderation', slug: 'commands/moderation' },
					],
				},
				{
					label: 'Tính năng nâng cao',
					items: [
						{ label: 'Welcome System', slug: 'features/welcome' },
						{ label: 'Ticket System', slug: 'features/ticket' },
						{ label: 'Embed Builder', slug: 'features/embed' },
						{ label: 'Autoresponder', slug: 'features/autoresponder' },
						{ label: 'Giveaway', slug: 'features/giveaway' },
						{ label: 'Anti-Raid', slug: 'features/anti-raid' },
					],
				},
				{
					label: 'Người dùng',
					items: [
						{ label: 'Player Commands', slug: 'user/player' },
						{ label: 'Khách hàng', slug: 'user/customer' },
						{ label: 'Lệnh tiện ích', slug: 'user/utilities' },
					],
				},
				{
					label: 'Hệ thống Shop',
					items: [
						{ label: 'Quản lý Shop', slug: 'shop/management' },
						{ label: 'Marriage System', slug: 'shop/marriage' },
						{ label: 'Lucky Box', slug: 'shop/lucky-box' },
					],
				},
				{
					label: 'Tính năng khác',
					items: [
						{ label: 'Part-time System', slug: 'features/part-time' },
						{ label: 'FAQ', slug: 'faq' },
						{ label: 'Troubleshooting', slug: 'troubleshooting' },
					],
				},
			],
		}),
	],
});
