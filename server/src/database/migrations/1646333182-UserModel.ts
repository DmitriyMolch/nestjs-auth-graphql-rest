import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class UserModel1614002843801 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
					},
					{
						name: 'fullname',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'password',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'first_name',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'last_name',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}),
			true
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('user')
	}
}
