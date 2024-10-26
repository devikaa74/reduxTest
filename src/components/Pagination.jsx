import React from 'react';
import '../App.css'; // Assuming you will create this file for pagination styles

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="pagination-container">
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button 
                    key={index + 1} 
                    onClick={() => handlePageChange(index + 1)} 
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;