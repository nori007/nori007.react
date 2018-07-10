import FireBaseDAO from '../component/FireBaseDAO'
import item from '../component/item'

var dao = new FireBaseDAO();

it('upload', function() {
    let key = dao.newKey();

    let update = dao.update(key, item());

    dao.getItem(key).on('value', (data) => {
        expect(data.key).toEqual(key);

        dao.remove(data.key);
    })
    
    return update;
})