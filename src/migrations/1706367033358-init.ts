import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1706367033358 implements MigrationInterface {
    name = 'Init1706367033358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "password" character varying NOT NULL, "location" character varying NOT NULL, "token" character varying NOT NULL, "verified" boolean NOT NULL, "verificationPin" character varying NOT NULL, "expoPushNotificationToken" character varying NOT NULL, "socketId" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "places" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "image" character varying, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "openingTime" character varying NOT NULL, "closingTime" character varying NOT NULL, "user" uuid, CONSTRAINT "REL_5bb599326d0b58973519ec0fa0" UNIQUE ("user"), CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lineup" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying NOT NULL, "event" uuid, CONSTRAINT "PK_6347eaca30f240b2bd3c65a3368" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event_ticket_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "numberSold" integer NOT NULL, "event" uuid, CONSTRAINT "PK_a6036425eead168219849553aa5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "place_event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "image" character varying NOT NULL, "phone" character varying NOT NULL, "description" character varying, "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "date" TIMESTAMP NOT NULL, "place" uuid, CONSTRAINT "REL_c943ba4b835feb818dae8992ba" UNIQUE ("place"), CONSTRAINT "PK_1de2d380dfc0f0d157112aaf1bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event_bought_tickets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "ticket" character varying NOT NULL, "numberOfTickets" integer NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "numberSold" integer NOT NULL, "user" uuid, "event" uuid, CONSTRAINT "PK_3a2ffbfdc7c848a1f5ef5d70411" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "places" ADD CONSTRAINT "FK_5bb599326d0b58973519ec0fa0c" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lineup" ADD CONSTRAINT "FK_eed0f667e61d8e265e89ed498b2" FOREIGN KEY ("event") REFERENCES "place_event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_ticket_type" ADD CONSTRAINT "FK_187b4f699573b8956d4e2c93cfd" FOREIGN KEY ("event") REFERENCES "place_event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "place_event" ADD CONSTRAINT "FK_c943ba4b835feb818dae8992ba3" FOREIGN KEY ("place") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_bought_tickets" ADD CONSTRAINT "FK_b274f7b09b6b58ea36f3d855237" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event_bought_tickets" ADD CONSTRAINT "FK_487e8112f6adea9646de9413329" FOREIGN KEY ("event") REFERENCES "place_event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event_bought_tickets" DROP CONSTRAINT "FK_487e8112f6adea9646de9413329"`);
        await queryRunner.query(`ALTER TABLE "event_bought_tickets" DROP CONSTRAINT "FK_b274f7b09b6b58ea36f3d855237"`);
        await queryRunner.query(`ALTER TABLE "place_event" DROP CONSTRAINT "FK_c943ba4b835feb818dae8992ba3"`);
        await queryRunner.query(`ALTER TABLE "event_ticket_type" DROP CONSTRAINT "FK_187b4f699573b8956d4e2c93cfd"`);
        await queryRunner.query(`ALTER TABLE "lineup" DROP CONSTRAINT "FK_eed0f667e61d8e265e89ed498b2"`);
        await queryRunner.query(`ALTER TABLE "places" DROP CONSTRAINT "FK_5bb599326d0b58973519ec0fa0c"`);
        await queryRunner.query(`DROP TABLE "event_bought_tickets"`);
        await queryRunner.query(`DROP TABLE "place_event"`);
        await queryRunner.query(`DROP TABLE "event_ticket_type"`);
        await queryRunner.query(`DROP TABLE "lineup"`);
        await queryRunner.query(`DROP TABLE "places"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
