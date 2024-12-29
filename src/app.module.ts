import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { SeedModule } from './seed/seed.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, SeedModule, BrandsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
