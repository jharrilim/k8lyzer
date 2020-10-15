import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { KubernetesProviderModule } from 'src/kubernetes-provider/kubernetes-provider.module';
import { PodsResolver } from './pods.resolver';
import { PodsService } from './pods.service';

@Module({
  imports: [KubernetesProviderModule],
  providers: [
    PodsResolver,
    PodsService
  ],
})
export class PodsModule { }