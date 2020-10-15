import { Query, Resolver } from '@nestjs/graphql';
import { Pod } from './pod.model';
import { PodsService } from './pods.service';

@Resolver(of => Pod)
export class PodsResolver {

  constructor(
    private readonly podsService: PodsService
  ) {}

  @Query(returns => [Pod])
  async pods() {
    const pods = await this.podsService.findAll();
    console.debug(pods[0]);
    return pods;
  }
}