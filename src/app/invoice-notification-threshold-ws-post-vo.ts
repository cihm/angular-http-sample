export class InvoiceNotificationThresholdWsPostVo {
  type: string;
  thresholdAmount: string;
  srcProject: string;

  constructor(type: string, thresholdAmount : string ,srcProject: string){
    this.type=type;
    this.thresholdAmount=thresholdAmount;
    this.srcProject=srcProject;
  }
}
