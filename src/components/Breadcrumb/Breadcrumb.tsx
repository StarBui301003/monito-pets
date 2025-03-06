import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem as ShadBreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbItem } from "@/types/BreadcrumbType";
import { Link } from "react-router-dom";
interface IProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbComponent = ({ items, className }: IProps) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <ShadBreadcrumbItem key={index}>
            {item.href ? (
              <Link
                to={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </ShadBreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
