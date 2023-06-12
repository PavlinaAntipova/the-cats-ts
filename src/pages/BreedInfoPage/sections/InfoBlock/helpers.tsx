type TTransformDataByState = {
  isLoading: boolean;
  isFetching: boolean;
  data: string | undefined;
  measure?: string;
};

export const transformDataByState = ({ isLoading, isFetching, data, measure }: TTransformDataByState) => {
  if (isLoading || isFetching) {
    return <span>...</span>;
  }

  if (data) {
    return measure ? `${data} ${measure}` : data;
  } else {
    return 'unknown';
  }
};
