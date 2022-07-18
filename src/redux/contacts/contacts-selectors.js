export const getAllContacts = ({contacts}) => contacts.items;
export const getFilteredContacts = ({contacts}) => {
    const {items, filter} = contacts;
    if(!filter) {
        return items;
    }
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({name}) => {
        return (name.toLowerCase().includes(normalizedFilter));
    })
};
