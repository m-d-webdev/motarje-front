import Spinner from '@/components/ui/loaders/Spinner'
import Modal_back from '@/components/ui/modal_back'
import React from 'react'

const loading = () => {
    return (
        <Modal_back>
            <Spinner />
        </Modal_back>
    )
}

export default loading
