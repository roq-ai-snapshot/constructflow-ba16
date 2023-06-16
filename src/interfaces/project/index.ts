import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  estimated_cost: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  _count?: {
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
