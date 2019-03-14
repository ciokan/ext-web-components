import './DataDragDropComponent.css';

export default class DataDragDropComponent {

  constructor () {}

  doDestroy() {
    Ext.destroy(this.source, this.target);
  }

  parentReady = (ele) => {
    this.parentRef = ele.detail.cmp.el;
    this.source.setConstrain(this.parentRef);
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  targetReady = (ele) => {
    this.targetRef = ele.detail.cmp.el;
    this.target.setElement(this.targetRef);
  }

  sourceReady = (ele) => {
    this.sourceRef = ele.detail.cmp.el;
    this.source.setElement(this.sourceRef);
  }

  // When the drag starts, the describe method is used to extract the relevant data that the drag 
  // represents and is pushed into the info object for consumption by the target.
  source = new Ext.drag.Source({
    handle: '.handle',
    describe: info => {
        info.setData('postage-duration', info.eventTarget.getAttribute('data-days'));
    },
    listeners: {
        dragstart: (source, info) => {
            source.getProxy().setHtml(info.eventTarget.innerHTML);
        }
    },
    proxy: {
        type: 'placeholder',
        cls: 'data-proxy'
    }
  });

  target = new Ext.drag.Target({
    validCls: 'data-target-valid',
    listeners: {
        drop: (target, info) => {
            // Get the data from the info object and use it to display the expectation to the user.
            info.getData('postage-duration').then(duration => {
                const s = Ext.String.format('Your parcel will arrive within {0} days', duration);
                Ext.Msg.alert('Delivery set', s);
            })
        }
    }
  });

}
