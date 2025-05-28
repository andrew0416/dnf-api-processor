import axios from "axios";
import { Character } from "../models/Character"
import { BASE_URL } from '../constants/api';

// 캐릭터의 이름을 통해 캐릭터들을 검색하여 배열형태로 반환한다.
async function searchCharacters(
    serverId: string,
    characterName: string,
    apiKey: string,
    wordType: string = 'match',
    limit: number = 10
  ): Promise<Character[]> {

    try {
        const url = `${BASE_URL}/servers/${serverId}/characters`;
        const params = {
        characterName,
        wordType: wordType,
        limit: limit,
        apikey: apiKey,
        };
    
        const response = await axios.get(url, { params });
    
        return response.data.rows.map((char: any) => {
        const c = new Character();
        c.serverId = char.serverId ?? null;
        c.characterId = char.characterId ?? null;
        c.characterName = char.characterName ?? null;
        c.level = char.level ?? null;
        c.jobId = char.jobId ?? null;
        c.jobGrowId = char.jobGrowId ?? null;
        c.jobName = char.jobName ?? null;
        c.jobGrowName = char.jobGrowName ?? null;
        c.fame = char.fame ?? null;
        return c;
        
        });
    } catch (error) {
        console.warn("Error: searchCharacters");
        return []
    }
    
  }

export { searchCharacters }