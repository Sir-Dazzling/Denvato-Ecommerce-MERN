import React from 'react';
import {Helmet} from 'react-helmet';

const Meta = ({title, description, keywords}) => 
{
    return (
        <Helmet>
            <title>{title}</title>
            <meta name = "description" content = {description}></meta>
            <meta name = "description" content = {keywords}></meta>
        </Helmet>
    )
};

Meta.defaultProps = 
{
    title: "Welcome to Denvato Stores",
    description: "We sell quality products as cheap as you can imagine",
    keywords: "Electronics, Buy Electronics, Cheap Electronics"
};

export default Meta;