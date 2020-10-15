import { Module } from '@nestjs/common';
import { KubernetesProviderService } from './kubernetes-provider.service';

@Module({
    exports: [KubernetesProviderService],
    providers: [KubernetesProviderService],
})
export class KubernetesProviderModule { }
