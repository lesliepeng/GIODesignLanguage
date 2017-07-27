import React from 'react';
import classNames from 'classnames';
import CopyableIcon from './CopyableIcon';

export default class IconSet extends React.Component {
  static defaultProps = {
    icons: [],
  }

  icons = {
    direction: ['right','left','up','down','double-left','left-circle'],
    suggestion: ['check','plus','plus-circle','close','close-circle'],
    logo: ['android-o', 'apple-o','desktop','website'],
    other: ['lock','unlock','segment-col','cycle-compare','segment-line','number-chart',
            'basic-col','bubble-chart','basic-bar','table','basic-line','filter-search',
            'filter','index-combined','sequence','index-element','qrcode','list','link',
            'grid','order-positive','order-reverse','user','user-circle-o','edit','granularity',
            'delete','share','calendar','star','star-o','setting','search'],
  };

  render() {
    const { className, catigory } = this.props;
    const listClassName = classNames({
      'anticons-list': true,
      clearfix: true,
      [className]: !!className,
    });
    return (
      <ul className={listClassName}>
        {this.icons[catigory].map(type => <CopyableIcon key={type} type={type} />)}
      </ul>
    );
  }
}
