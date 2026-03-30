export type FamilyMember = {
  id: string;
  name: string;
  relation: string;
  description?: string;
  image?: string;
};

export const familyMembers: FamilyMember[] = [
  { id: "1", name: "Саша", relation: "сын", image: undefined },
  { id: "2", name: "Ксюша", relation: "дочь", image: undefined },
  { id: "3", name: "Глеб", relation: "сын", image: undefined },
  { id: "4", name: "Надя", relation: "дочь", image: undefined },
  { id: "5", name: "Анджи", relation: "дочь", image: undefined },
];
