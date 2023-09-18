import { useState, useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    function deleteMeetupHandler() {
        setIsDeleting(true);

    }

    function confirmDeleteHandler() {

    }

    function cancelDeleteHandler() {
        setIsDeleting(false);
    }

    function toggleEditHandler() {
        setIsEditing((prevState) => !prevState);
    }

    function updateMeetupHandler() {
        const updatedMeetupData = {
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
        };
        setIsEditing(false);
    }

    return (
        <li className={classes.item}>
            <Card>
                {isEditing ? (
                    // ...
                ) => (
                    <div className={classes.confirmDelete}>
                        <p>Are you sure you want to delete this meetup?</p>
                        <div className={classes.actions}>
                            <button onClick={confirmDeleteHandler}>Yes</button>
                            <button onClick={cancelDeleteHandler}>No</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={classes.image}>
                            <img src={props.image} alt={props.title} />
                        </div>
                        <div className={classes.content}>
                            <h3>{props.title}</h3>
                            <address>{props.address}</address>
                            <p>{props.description}</p>
                        </div>
                        <div className={classes.actions}>
                            <button onClick={toggleFavoriteStatusHandler}>
                                {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                            </button>

                            <div>
                            <button onClick={toggleEditHandler}>Delete</button>
                            </div>

                        </div>
                    </>
                )}
            </Card>
        </li>
    );
}

export default MeetupItem;