import { addFriend, deleteFriend, starFriend } from './FriendsActions';

describe('Testing FriendsActions', () => {
    
    test('addFriend should return the correct object', () => {
        const name = 'Test-name';
        const gender = 'Male';
        const Addedaction = addFriend(name, gender);
        expect(Addedaction.data.name).toBe(name);
        expect(Addedaction.data.gender).toBe(gender);
        expect(Addedaction.type).toBe('ADD_FRIEND');
    });

    test('starFriend should return the correct object', () => {  
        const StareDaction = starFriend(1);
        expect(StareDaction.id).toBe(1);
        expect(StareDaction.type).toBe('STAR_FRIEND');

    });

    test('deleteFriend should return the correct object', () => { 
        const DeleteDaction = deleteFriend(1);
        expect(DeleteDaction.id).toBe(1);
        expect(DeleteDaction.type).toBe('DELETE_FRIEND');
    });
});
