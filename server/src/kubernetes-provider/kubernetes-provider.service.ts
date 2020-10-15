import { KubeConfig, CoreV1Api } from '@kubernetes/client-node';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KubernetesProviderService {
  private readonly _kubeConfig: KubeConfig;
  private readonly _apiClient: CoreV1Api;
  constructor() {
    this._kubeConfig = new KubeConfig();
    this._kubeConfig.loadFromDefault();

    this._apiClient = this._kubeConfig.makeApiClient(CoreV1Api);
  }

  kubeConfig() {
    return this._kubeConfig;
  }

  apiClient() {
    return this._apiClient;
  }
}
