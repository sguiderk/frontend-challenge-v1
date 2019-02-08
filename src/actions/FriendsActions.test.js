import { addFriend, deleteFriend, starFriend } from './FriendsActions';

describe('Testing FriendsActions', () => {

    test('addFriend should return correct object from given arguments', () => {
        const name = 'Test-name';
        const gender = 'Male';
        const AddedAction = addFriend(name, gender);
        expect(AddedAction.data.name).toBe(name);
        expect(AddedAction.data.gender).toBe(gender);
        expect(AddedAction.type).toBe('ADD_FRIEND');
    });

    test('starFriend should return correct object from given arguments', () => {
    
        const StareDAction = starFriend(1);
        expect(StareDAction.id).toBe(1);
        expect(StareDAction.type).toBe('STAR_FRIEND');

    });

     test('deleteFriend should return correct object from given arguments', () => {
    
        const DeleteDAction = deleteFriend(1);
        expect(DeleteDAction.id).toBe(1);
        expect(DeleteDAction.type).toBe('DELETE_FRIEND');

    });
}); 

