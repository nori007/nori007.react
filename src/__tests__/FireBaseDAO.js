import FireBaseDAO from '../component/FireBaseDAO'
import item from '../component/item'

var dao = new FireBaseDAO();

it('upload', function() {
    let key = dao.newKey();
    // let update = dao.update(key, item(1));
    // key = dao.newKey();
    // let update = dao.update(key, item(2));
    // key = dao.newKey();
    // let update = dao.update(key, item(3));
    // key = dao.newKey();
    // let update = dao.update(key, item(4));
    // key = dao.newKey();
    // let update = dao.update(key, item(5));
    // key = dao.newKey();
    // let update = dao.update(key, item(6));


    // dao.getItem(key).on('value', (data) => {
    //     expect(data.key).toEqual(key);

    //     dao.remove(data.key);
    // })

    return update;
})