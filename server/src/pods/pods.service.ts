import { CoreV1Api, KubeConfig } from '@kubernetes/client-node';
import { Injectable } from '@nestjs/common';
import { KubernetesProviderService } from 'src/kubernetes-provider/kubernetes-provider.service';
import { Pod } from './pod.model';

@Injectable()
export class PodsService {
  private readonly k8s: CoreV1Api;
  constructor(
    kubernetesProviderService: KubernetesProviderService
  ) {
    this.k8s = kubernetesProviderService.apiClient();
  }

  findAll = async (): Promise<Pod[]> => (
    await this
      .k8s
      .listPodForAllNamespaces()
  )
    .body
    .items
    .map(pod => ({
      apiVersion: pod.apiVersion,
      kind: pod.kind,
      metadata: JSON.stringify(pod.metadata),
      spec: JSON.stringify(pod.spec),
      status: JSON.stringify(pod.status),
    }));

}
