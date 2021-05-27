import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

// const CollectionPreview = ({ title, items }) => (
//     <div className='collection-preview' >
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {items
//                 .filter((item, idx) => idx < 4)
//                 .map((item) => (
//                     <CollectionItem key={item.id} item={item} category={title} />
//                 ))}
//         </div>
//     </div>
// )

class CollectionPreview extends React.Component {
    pageProductContribution = null
    relevantItems = this.props.items.slice(0, 4)
    componentDidMount() {
        console.log('mounting CollectionsPreview')
        console.log(this.props.items)
    }

    componentWillUnmount() {
        console.log('unmounting CollectionsPreview')
    }

    render() {
        return (<div className='collection-preview' >
            <h1 className='title'>{this.props.title.toUpperCase()}</h1>
            <div className='preview'>
                {this.relevantItems
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} category={this.props.title} />
                    ))}
            </div>
        </div>)
    }
}

export default CollectionPreview