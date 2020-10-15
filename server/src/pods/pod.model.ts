import { V1ObjectMeta, V1PodSpec, V1PodStatus } from '@kubernetes/client-node';
import { Field, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class Pod {
  @Field(type => String, { nullable: true })
  apiVersion?: string;

  @Field(type => String, { nullable: true })
  kind?: string;

  @Field(type => String, { nullable: true })
  metadata?: string;

  @Field(type => String, { nullable: true })
  spec?: string;

  @Field(type => String, { nullable: true })
  status?: string;
}