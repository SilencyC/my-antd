import React from 'react';
import ClassNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
//Button 自带属性 and BaseButtonProps
type ButtonSelf = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
//A标签 自带属性 and BaseButtonProps
type ASelf = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
//Partial 设置所有属性为可选属性
type ButtonProps = Partial<ButtonSelf & ASelf>;

const Button: React.FC<ButtonProps> = (props) => {
  //rest取出所有除了列出来的属性以外的属性
  const { btnType, disabled, size, children, href, className, ...rest } = props;
  const classes = ClassNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      //将剩余的说有属性加在标签上
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      //将剩余的说有属性加在标签上
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
