import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

export const Notice = (props) => {
    const { title } = props
    return(
        <div>
            <WhiteSpace size="lg" />
            <NoticeBar mode="closable" >
            {title}
            </NoticeBar>
        </div>
    )
};
