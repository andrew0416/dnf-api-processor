import { BASE_URL } from '../constants/api'
import axios from "axios";

class Character{
    // 캐릭터 검색 api로 조회되는 정보
    public serverId: string | null; // 서버명
    public characterId: string | null // 캐릭터 아이디
    public characterName: string | null; // 캐릭터 이름
    public level: number | null; // 캐릭터 레벨
    public jobId: string | null; // 직업 아이디
    public jobGrowId: string | null; // 전직 아이디
    public jobName: string | null; // 직업명
    public jobGrowName: string | null; // 전직명
    public fame: number | null; // 명성

    // 캐릭터 `기본 정보` 조회 api로 추가적으로 조회되는 정보
    public adventureName: string | null;
    public guildId: string | null;
    public guildName: string | null;

    constructor(
        serverId: string | null = null,
        characterId: string | null = null,
        characterName: string | null = null,
        level: number | null = null,
        jobId: string | null = null,
        jobGrowId: string | null = null,
        jobName: string | null = null,
        jobGrowName: string | null = null,
        fame: number | null = null,
        adventureName: string | null = null,
        guildId: string | null = null,
        guildName: string | null = null
      ) {
        this.serverId = serverId;
        this.characterId = characterId;
        this.characterName = characterName;
        this.level = level;
        this.jobId = jobId;
        this.jobGrowId = jobGrowId;
        this.jobName = jobName;
        this.jobGrowName = jobGrowName;
        this.fame = fame;
        this.adventureName = adventureName;
        this.guildId = guildId;
        this.guildName = guildName;
      }
    
    async updateInfo(apiKey: string): Promise<void>{
      try {
        const url = `${BASE_URL}/servers/${this.serverId}/characters/${this.characterId}`;
        const params = {
          apikey: apiKey,
        };
        const response = await axios.get(url, {params})
        const body = response.data

        const {
          serverId,
          characterId,
          characterName,
          level,
          jobId,
          jobGrowId,
          jobName,
          jobGrowName,
          fame,
          adventureName,
          guildId,
          guildName,
        } = body;

        Object.assign(this, {
          serverId,
          characterId,
          characterName,
          level,
          jobId,
          jobGrowId,
          jobName,
          jobGrowName,
          fame,
          adventureName,
          guildId,
          guildName,
        });
          
      } catch (error) {
        console.warn("Error: Character.update()");
      }
      
    }
}


export { Character }