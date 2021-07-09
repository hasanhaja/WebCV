import { Information } from './information';
import { OrganizationInformation } from './organizationInformation';
import { Description } from './description';


export class ExperienceInformation extends Information {
  constructor (
    startYear: number,
    endYear: number,
    title: string,
    organization: OrganizationInformation,
    descriptions: Array<Description>) {
    super(startYear, endYear, title, organization, descriptions);
  }
}
