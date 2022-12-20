import {GameDetails} from "@sportradar-dcl/common";

export class LocalGameDetailsModel implements GameDetails {
  id: string;
  attendance: number;
  constructor( id: string, attendance: number) {
    this.id = id;
    this.attendance = attendance;
  }
}
