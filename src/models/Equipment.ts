interface StatusInfo {
    name: string;
    value: number | string;
}

interface TuneWeapon {
    level: number;
    upgrade: boolean;
    status: StatusInfo[]; 
}

interface TuneOthers {
    level: number;
    setPoint: number;
}

type Tune = number | TuneWeapon | TuneOthers

interface Option {
    buff: number;
    explain: string;
    explainDetail: string;
    buffExplain: string;
    buffExplainDetail: string;
}

interface FusionOption {
    options: Option[];
}

interface UpgradeInfo {
    itemId: string;
    itemName: string;
    itemRarity: string;
}

interface EquipmentData {
    slotId: string;
    slotName: string;
    itemId: string;
    itemName: string;
    itemTypeId: string;
    itemType: string;
    itemTypeDetailId: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
    itemRarity: string;
    setItemId: string | null;
    setItemName: string | null;
    reinforce: number;
    itemGradeName?: string;
    enchant?: { status: StatusInfo[] };
    amplificationName: string | null;
    refine: number;
    tune?: Tune[];
    fusionOption?: FusionOption;
    upgradeInfo?: UpgradeInfo;
  }

class Equipment {
    public slotId: string;
    public slotName: string;
    public itemId: string;
    public itemName: string;
    public itemTypeId: string;
    public itemType: string;
    public itemTypeDetailId: string;
    public itemTypeDetail: string;
    public itemAvailableLevel: number;
    public itemRarity: string;
    public setItemId: string | null = null;
    public setItemName: string | null = null;
    public reinforce: number;
    public itemGradeName: string | undefined = undefined;
    public enchant: { status: StatusInfo[] } | null | undefined = undefined;
    public amplificationName: string | null;
    public refine: number | null;
    public fusionOption: FusionOption | null | undefined = undefined;
    public upgradeInfo: UpgradeInfo | null | undefined = undefined;
    public tune: Tune[] | null | undefined = undefined;

    constructor(
        data: EquipmentData
    ) {
        this.slotId = data.slotId;
        this.slotName = data.slotName;
        this.itemId = data.itemId;
        this.itemName = data.itemName;
        this.itemTypeId = data.itemTypeId;
        this.itemType = data.itemType;
        this.itemTypeDetailId = data.itemTypeDetailId;
        this.itemTypeDetail = data.itemTypeDetail;
        this.itemAvailableLevel = data.itemAvailableLevel;
        this.itemRarity = data.itemRarity;
        this.setItemName = data.setItemName;
        this.reinforce = data.reinforce;
        this.amplificationName = data.amplificationName
        this.refine = data.refine

        if (data.itemGradeName !== undefined){
            this.itemGradeName = data.itemGradeName
        }

        if (data.enchant !== undefined){
            this.enchant = data.enchant
        }

        if (data.fusionOption !== undefined){
            this.fusionOption = data.fusionOption
        }

        if (data.upgradeInfo !== undefined){
            this.upgradeInfo = data.upgradeInfo
        }

        if (data.tune !== undefined){
            this.tune = data.tune
        }
    }

}

export { Equipment }