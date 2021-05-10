import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

export const Notice = () => {
    return(
        <div>
            <WhiteSpace size="lg" />
            <NoticeBar mode="closable" >
            Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
            </NoticeBar>
        </div>
    )
};
