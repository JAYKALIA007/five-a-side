export type Player = {
    name :  string;
    position: string;
    rating: number;
    country: string;
    imgUrl: string
}

export type SelectedPlayers = {
    player1: Player | null;
    player2: Player | null;
    player3: Player | null;
    player4: Player | null;
    player5: Player | null;
}

export type NonNullableSelectedPlayers = Record<
  keyof SelectedPlayers,
  NonNullable<SelectedPlayers[keyof SelectedPlayers]>
>;