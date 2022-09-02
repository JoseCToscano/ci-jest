import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateLegacyInterestRates1654016649059
	implements MigrationInterface
{
	name = 'updateLegacyInterestRates1654016649059';

	public async up(queryRunner: QueryRunner): Promise<void> {
		// Update legacy interest rates for existing merchant payment options, excluding banned merchants
		// update data with storeId
		await queryRunner.query(
			`UPDATE paymentOptions PO
                INNER JOIN sucursales S ON PO.storeId = S.idSucursal
                INNER JOIN comercios C ON S.comercio = C.idComercio
                INNER JOIN defaultStandardRates DSR ON C.categoryId = DSR.categoryId
                SET PO.a0InterestRate = DSR.a1, 
                    PO.a1InterestRate = DSR.a1, PO.a2InterestRate = DSR.a2, PO.a3InterestRate = DSR.a3,
                    PO.b1InterestRate = DSR.b1, PO.b2InterestRate = DSR.b2, PO.b3InterestRate = DSR.b3,
                    PO.c1InterestRate = DSR.c1, PO.c2InterestRate = DSR.c2, PO.c3InterestRate = DSR.c3
                WHERE PO.isReference = 0  and PO.type <> 'PROMO' AND C.configureStandardRateBanned = false`
		);
		// update data with merchantId
		await queryRunner.query(
			`UPDATE paymentOptions PO
                INNER JOIN comercios C ON PO.merchantId = C.idComercio
                INNER JOIN defaultStandardRates DSR ON C.categoryId = DSR.categoryId
                SET PO.a0InterestRate = DSR.a1, 
                    PO.a1InterestRate = DSR.a1, PO.a2InterestRate = DSR.a2, PO.a3InterestRate = DSR.a3,
                    PO.b1InterestRate = DSR.b1, PO.b2InterestRate = DSR.b2, PO.b3InterestRate = DSR.b3,
                    PO.c1InterestRate = DSR.c1, PO.c2InterestRate = DSR.c2, PO.c3InterestRate = DSR.c3
                WHERE PO.isReference = 0  and PO.type <> 'PROMO' AND C.configureStandardRateBanned = false AND PO.id > 0 `
		);
		// Update legacy interest rates for existing reference payment options
		await queryRunner.query(
			` UPDATE paymentOptions PO
                    INNER JOIN categoryPaymentOptions CPO ON PO.id = CPO.paymentOptionId
                    INNER JOIN defaultStandardRates DSR ON CPO.categoryId = DSR.categoryId
                    SET PO.a0InterestRate = DSR.a1, 
                        PO.a1InterestRate = DSR.a1, PO.a2InterestRate = DSR.a2, PO.a3InterestRate = DSR.a3,
                        PO.b1InterestRate = DSR.b1, PO.b2InterestRate = DSR.b2, PO.b3InterestRate = DSR.b3,
                        PO.c1InterestRate = DSR.c1, PO.c2InterestRate = DSR.c2, PO.c3InterestRate = DSR.c3
                    WHERE PO.isReference = 1  and PO.type <> 'PROMO'`
		);
	}

	public async down(): Promise<void> {
		// Do nothing, deletes aren't allowed
	}
}
