import { MigrationInterface, QueryRunner } from 'typeorm';

export class configureMerchantsForStandardRate1653951907767
	implements MigrationInterface
{
	name = 'configureMerchantsForStandardRate1653951907767';

	public async up(queryRunner: QueryRunner): Promise<void> {
		// flag to configure merchants to allow setting standard rate
		// configureStandardRateBanned = true  : does not allow to configure.
		// configureStandardRateBanned = false  : allows to configure.
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`UPDATE comercios SET configureStandardRateBanned = true 
                WHERE idComercio IN (413,13,51,130,639,400,343,226,52,94,49,66,70,54,64,330,60,152,15,372,223,419,445,89,67,63,103,6,410,304,247,300,329,423,121,301,344,341,409,306,
86,309,307,317,299,4,16,65,533,46,69,78,11,53,56,536,57,7,58,10,374,62,61,47,48,117,354,74,40,55,305,327,45,50,640,720,156,352,242)`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`UPDATE comercios SET configureStandardRateBanned = false 
                WHERE idComercio IN (413,13,51,130,639,400,343,226,52,94,49,66,70,54,64,330,60,152,15,372,223,419,445,89,67,63,103,6,410,304,247,300,329,423,121,301,344,341,409,306,
86,309,307,317,299,4,16,65,533,46,69,78,11,53,56,536,57,7,58,10,374,62,61,47,48,117,354,74,40,55,305,327,45,50,640,720,156,352,242)`
		);
	}
}
