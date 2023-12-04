CREATE TABLE `mayur_portfolio_post` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mayur_portfolio_post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mayur_portfolio_visitors` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(0),
	`email` varchar(0),
	`message` varchar(0),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `mayur_portfolio_visitors_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `mayur_portfolio_post` (`name`);