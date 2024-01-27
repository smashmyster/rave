import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1706359077491 implements MigrationInterface {
    name = 'Init1706359077491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`surname\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`verified\` tinyint NOT NULL, \`verificationPin\` varchar(255) NOT NULL, \`expoPushNotificationToken\` varchar(255) NOT NULL, \`socketId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`places\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, \`latitude\` varchar(255) NOT NULL, \`longitude\` varchar(255) NOT NULL, \`openingTime\` varchar(255) NOT NULL, \`closingTime\` varchar(255) NOT NULL, \`user\` varchar(36) NULL, UNIQUE INDEX \`REL_5bb599326d0b58973519ec0fa0\` (\`user\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lineup\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`event\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event_bought_tickets\` (\`id\` varchar(36) NOT NULL, \`ticket\` varchar(255) NOT NULL, \`numberOfTickets\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`numberSold\` int NOT NULL, \`user\` varchar(36) NULL, \`event\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event_ticket_type\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`numberSold\` int NOT NULL, \`event\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place_event\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`startTime\` datetime NOT NULL, \`endTime\` datetime NOT NULL, \`date\` datetime NOT NULL, \`place\` varchar(36) NULL, UNIQUE INDEX \`REL_c943ba4b835feb818dae8992ba\` (\`place\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`places\` ADD CONSTRAINT \`FK_5bb599326d0b58973519ec0fa0c\` FOREIGN KEY (\`user\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`lineup\` ADD CONSTRAINT \`FK_eed0f667e61d8e265e89ed498b2\` FOREIGN KEY (\`event\`) REFERENCES \`place_event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_bought_tickets\` ADD CONSTRAINT \`FK_b274f7b09b6b58ea36f3d855237\` FOREIGN KEY (\`user\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_bought_tickets\` ADD CONSTRAINT \`FK_487e8112f6adea9646de9413329\` FOREIGN KEY (\`event\`) REFERENCES \`place_event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_ticket_type\` ADD CONSTRAINT \`FK_187b4f699573b8956d4e2c93cfd\` FOREIGN KEY (\`event\`) REFERENCES \`place_event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place_event\` ADD CONSTRAINT \`FK_c943ba4b835feb818dae8992ba3\` FOREIGN KEY (\`place\`) REFERENCES \`places\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`place_event\` DROP FOREIGN KEY \`FK_c943ba4b835feb818dae8992ba3\``);
        await queryRunner.query(`ALTER TABLE \`event_ticket_type\` DROP FOREIGN KEY \`FK_187b4f699573b8956d4e2c93cfd\``);
        await queryRunner.query(`ALTER TABLE \`event_bought_tickets\` DROP FOREIGN KEY \`FK_487e8112f6adea9646de9413329\``);
        await queryRunner.query(`ALTER TABLE \`event_bought_tickets\` DROP FOREIGN KEY \`FK_b274f7b09b6b58ea36f3d855237\``);
        await queryRunner.query(`ALTER TABLE \`lineup\` DROP FOREIGN KEY \`FK_eed0f667e61d8e265e89ed498b2\``);
        await queryRunner.query(`ALTER TABLE \`places\` DROP FOREIGN KEY \`FK_5bb599326d0b58973519ec0fa0c\``);
        await queryRunner.query(`DROP INDEX \`REL_c943ba4b835feb818dae8992ba\` ON \`place_event\``);
        await queryRunner.query(`DROP TABLE \`place_event\``);
        await queryRunner.query(`DROP TABLE \`event_ticket_type\``);
        await queryRunner.query(`DROP TABLE \`event_bought_tickets\``);
        await queryRunner.query(`DROP TABLE \`lineup\``);
        await queryRunner.query(`DROP INDEX \`REL_5bb599326d0b58973519ec0fa0\` ON \`places\``);
        await queryRunner.query(`DROP TABLE \`places\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
