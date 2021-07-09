import { OrganizationInformation } from './organizationInformation';
import { Description } from './description';

export abstract class Information {
  // TODO years should be date objects so they can hold month
  public readonly startYear: number;
  public readonly endYear: number;
  public readonly title: string;
  public readonly organization: OrganizationInformation;
  public readonly descriptions: Array<Description>;

  protected constructor (
    startYear: number,
    endYear: number,
    title: string,
    organization: OrganizationInformation,
    descriptions: Array<Description>) {

    this.startYear = startYear;
    this.endYear = endYear;
    this.title = title;
    this.organization = organization;
    this.descriptions = descriptions;
  }
}
