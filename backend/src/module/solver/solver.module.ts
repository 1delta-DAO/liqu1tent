import { Module } from "@nestjs/common";
import { SolverScheduler } from "./scheduler/solver.scheduler";
import { SolverService } from "./service/solver.service";
import { OrderModule } from "../order/order.module";

@Module({
  imports: [OrderModule],
  providers: [SolverScheduler, SolverService],
})
export class SolverModule {}
