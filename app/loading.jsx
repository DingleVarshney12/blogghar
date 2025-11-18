import React from 'react'

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-32 mt-28">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 dark:border-gray-50"></div>
        </div>
    )
}

export default Loading