// Sam Library - Firestore Database Functions
// Firebase JS SDK v12.1.0

import {
    collection,
    query,
    orderBy,
    onSnapshot,
    deleteDoc,
    doc
} from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js';

import { db } from './firebase-config.js';


// ======================================================
// WATCH ENQUIRIES
// ======================================================

export function watchEnquiries(callback) {

    if (!db) {
        console.error('Firestore is not initialized.');
        return () => {};
    }

    const enquiriesRef = collection(db, 'enquiries');

    const enquiriesQuery = query(
        enquiriesRef,
        orderBy('createdAt', 'desc')
    );

    return onSnapshot(
        enquiriesQuery,

        snapshot => {

            const enquiries = snapshot.docs.map(
                document => ({
                    id: document.id,
                    ...document.data()
                })
            );

            callback(enquiries);
        },

        error => {

            console.error(
                'Error loading enquiries:',
                error
            );

            callback([]);
        }
    );
}


// ======================================================
// DELETE ENQUIRY
// ======================================================

export async function deleteEnquiry(enquiryId) {

    if (!db) {
        throw new Error(
            'Firestore is not initialized.'
        );
    }

    if (!enquiryId) {
        throw new Error(
            'Enquiry ID is missing.'
        );
    }

    await deleteDoc(
        doc(
            db,
            'enquiries',
            enquiryId
        )
    );

}
