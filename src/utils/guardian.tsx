import Guardian from 'guardian-js';

const guardianKey: string = process.env.REACT_APP_GUARDIAN_KAY || '';

const guardianApi = new Guardian(guardianKey, false);

export default guardianApi;