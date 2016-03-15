class ChartsController < ApplicationController
  def show
    @groups = Appearance.pluck(:group).uniq.sort


  end

  def data

    q = Appearance.all

    if params[:group].present?
      q = q.where(group: params[:group])
    end

    @grouped_appearance = q.group_by(&:year)

    the_data = []

    @grouped_appearance.each do |year, records|
      the_data.push([year, records.count])
    end

    render json: the_data
  end
end
