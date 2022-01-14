CREATE DATABASE IF NOT EXISTS `myProject` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `myProject`;

DROP TABLE IF EXISTS `adm_user`;
CREATE TABLE `adm_user` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `role_id` bigint(20) NOT NULL COMMENT '角色id',
    `name` nvarchar(255) NOT NULL COMMENT '用户名',
    `password` nvarchar(255) NOT NULL COMMENT '密码',
    `user_status` int(11) DEFAULT '0',
    `create_user` nvarchar(50) DEFAULT NULL,
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
    `modify_user` nvarchar(50) DEFAULT NULL,
    `modify_time` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `adm_role`;
CREATE TABLE `adm_role` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `name` nvarchar(255) NOT NULL COMMENT '角色名称',
    `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

DROP TABLE IF EXISTS `adm_menu`;
CREATE TABLE `adm_menu` (
    `id`    bigint(20) NOT NULL AUTO_INCREMENT,
    `pid`   bigint(20) NOT NULL COMMENT '上層選單',
    `phyle` nvarchar(50) DEFAULT NULL COMMENT 'Parent Hierarchy',
    `name`  nvarchar(255) NOT NULL COMMENT '权限名称',
    `url`   nvarchar(255) NOT NULL COMMENT '权限对应的接口',
    `sort`  int(11) NOT NULL DEFAULT '0' COMMENT '排序',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

