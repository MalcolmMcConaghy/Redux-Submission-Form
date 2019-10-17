export function submitPlayerInfo(payload) {
  return {
    type: SUBMIT_PLAYER_INFO,
    payload
  }
}

export function submitOverwatchInfo(payload) {
  return {
    type: SUBMIT_OVERWATCH_INFO,
    payload
  }
}

export const SUBMIT_PLAYER_INFO = 'SUBMIT_PLAYER_INFO';
export const SUBMIT_OVERWATCH_INFO = 'SUBMIT_OVERWATCH_INFO';