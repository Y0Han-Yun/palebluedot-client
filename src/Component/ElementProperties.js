import React from 'react';

/**
 * 이 컴포넌트는 테스트가 완료된 컴포넌트입니다.
 *
 * 이 컴포넌트는 (직접)자녀의 화면상 위치속성에 대하여 알고싶을 때 사용한다.
 *
 * 주의사항) 이 컴포넌트는 정확히 하나의 (직접)자녀를 가져야 한다.
 *         직접자녀의 자녀들 같은 경우는 자유롭게 만들어 주어도 된다.
 *
 * 사용방법 예시
 *
 * <ElementProperties
 *   onMount={properties => console.log(properties)}
 *   onUpdate={properties => console.log(properties)}>
 *   <h1>Hello, world!</h1>
 * </ElementProperties>
 */
class ElementProperties extends React.Component {

  constructor () {
    super();
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.calculateProperties = this.calculateProperties.bind(this);
    this.childrenRef = React.createRef();
  }

  componentDidMount () {
    const elements = document.body.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('scroll', this.handleScrollEvent);
    }
    this.props.onMount(this.calculateProperties());
  }

  componentWillUnmount () {
    const elements = document.body.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener('scroll', this.handleScrollEvent);
    }
  }

  handleScrollEvent () {
    this.props.onUpdate(this.calculateProperties());
  }

  calculateProperties () {
    const rect = this.childrenRef.current.getBoundingClientRect();
    const properties = {
      // 현재 눈에보이는 페이지의 높이
      windowInnerHeight: window.innerHeight,

      // 모든 스크롤까지 합친 전체 문서의 높이
      documentHeight: document.body.clientHeight,

      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right,

      // 화면에 전체모습이 들어날경우 참 아닐경우 거짓
      visibleOnScreen: (rect.top <= window.innerHeight - rect.height) && (rect.top >= 0),

      // 화면에 보이는 상태일 때 밑에서부터 얼마나 떨어져있는가
      bottomFromScreen: window.innerHeight - rect.bottom,

      // 절대적 위치 속성 (즉, 변하지 않는)
      documentCoordinates: (() => ({
        top: rect.top + window.pageYOffset,
        right: rect.right + window.pageXOffset,
        bottom: rect.bottom + window.pageYOffset,
        left: rect.left + window.pageXOffset
      }))()
    };
    return properties;
  }

  render () {
    return React.cloneElement(React.Children.only(this.props.children), { ref: this.childrenRef });
  }

}

export default ElementProperties;
