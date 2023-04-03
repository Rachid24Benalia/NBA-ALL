export interface Team {
  allStar: boolean;
  city: String;
  code: string;
  id: string
  league:{
    sacramento:{
      conference: String;
      division: String;
    }
    standard:{
      conference: String;
      division: string;
    }
    utah:{
      conference: String;
      division: string;
    }
    vegas:{
      conference: String;
      division: string;
    }
  }
  logo: string;
  name: string;
  nbaFranchise: boolean;
  nickname: string
    
}
